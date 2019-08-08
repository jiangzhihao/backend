import { Ctx, Param, Get, JsonController, Redirect } from "routing-controllers";
import { Context } from "koa";
import UserInfo from "../../models/user/user-info";

@JsonController("/list")
export default class {
  @Get("/")
  @Redirect("http://github.com")
  async router(@Ctx() ctx: Context) {
    try {
      return {
        code: 200,
        data: await filterList()
      };
    } catch (e) {
      console.error(ctx, e);
      return {
        code: 500,
        message: "服务器错误"
      };
    }
  }

  @Get("/filter/:gender")
  async anotherRouter(@Ctx() ctx: Context, @Param("gender") gender: number) {
    try {
      if (!gender) {
        return {
          code: 401,
          message: "缺少参数"
        };
      }

      return {
        code: 200,
        data: await filterList({
          gender
        })
      };
    } catch (e) {
      console.error(ctx, e);
      return {
        code: 500,
        message: "服务器错误"
      };
    }
  }
}

/**
 * 获取列表数据
 */
async function filterList({ gender }: { gender?: number } = {}) {
  return UserInfo.findAll({
    raw: true,
    where: gender && {
      gender
    }
  });
}
