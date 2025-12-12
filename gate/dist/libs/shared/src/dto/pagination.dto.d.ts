export declare namespace PaginationDTO {
    class Request {
        page: number;
        limit: number;
    }
    class Response {
        page: number;
        total_pages: number;
        items_count: number;
        is_last_page: boolean;
    }
}
