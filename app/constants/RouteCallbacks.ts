import { RequestHandler, Request, Response } from "express";
import Config from '../../Config';

const HomeUrlCallBack: RequestHandler = (request: Request, response: Response) =>
  response.send('Hi there you have got the response');

const ListenCallback = () => console.log(`Server running on port => ${Config.ports.express}`);

export default {
  HomeUrlCallBack,
  ListenCallback
};