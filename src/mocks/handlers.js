import { rest } from "msw";

const baseURL = "https://weshare-api-app.herokuapp.com";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
        {"pk":3,
        "username":"ben",
        "email":"",
        "first_name":"",
        "last_name":"",
        "profile_id":3,
        "profile_image":"https://res.cloudinary.com/df4j1glpo/image/upload/v1/media/images/happy_sfmlef"}
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];