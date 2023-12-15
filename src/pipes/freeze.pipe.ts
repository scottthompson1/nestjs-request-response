import { ArgumentMetadata, ForbiddenException, Injectable, Logger, PipeTransform } from "@nestjs/common";

@Injectable()
export class FreezePipe implements PipeTransform{
    private readonly logger = new Logger(FreezePipe.name);

    transform(value: any, metadata: ArgumentMetadata) {
        this.logger.debug('FreezePipe running...')
        Object.freeze(value); //this prevents any modification of the data and makes it immutable
        return value;
    }
    
}