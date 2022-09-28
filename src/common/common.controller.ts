import { Controller, Get, Post } from '@nestjs/common';
import { CommonService } from './common.services';

@Controller('/commonApi')
export class CommonController{
    constructor( private readonly commonService : CommonService) {}

    @Get('firstApi')
    public async index(){
        return await this.commonService.say();
    }
}