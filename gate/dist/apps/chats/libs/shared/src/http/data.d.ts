import { Constructable, Nullable } from '@shared';
import { JWTGuardOptions } from '@systems';
export declare namespace Data {
    enum Method {
        Get = "GET",
        Post = "POST",
        Put = "PUT",
        Delete = "DELETE",
        Patch = "PATCH"
    }
    type Path = Nullable<string[] | string>;
    interface MethodContract {
        method: Method;
        path: Path;
        version?: string;
        name?: string;
        jwt?: JWTGuardOptions;
        description?: string;
        RequestQuery?: Constructable;
        RequestBody?: Constructable;
        RequestParams?: Constructable;
        ResponseBody: Constructable;
    }
    interface ControllerContract {
        name: string;
        path: Path;
    }
}
