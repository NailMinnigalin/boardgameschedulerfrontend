import "reflect-metadata";
import { container } from "tsyringe";
import { IApiService, IApiServiceToken } from "./interfaces/api-service.interface";
import { ApiService } from "./implementations/api-service";
import { IConfigService, IConfigServiceToken } from "./interfaces/config-service.interface";
import { ConfigService } from "./implementations/config-service";
import { IUserService, IUserServiceToken } from "./interfaces/user-service";
import { UserService } from "./implementations/user-service";

container.register<IApiService>(IApiServiceToken, { useClass: ApiService });
container.register<IConfigService>(IConfigServiceToken, {useClass: ConfigService})
container.register<IUserService>(IUserServiceToken, {useClass: UserService})