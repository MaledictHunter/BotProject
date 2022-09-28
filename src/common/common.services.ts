import { Injectable } from '@nestjs/common';


@Injectable()
export class CommonService {
  
    public async say(){
        return 'this is CommonService';
    }

}