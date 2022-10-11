import { Account } from "./account";

export class Post {
    post_id: number | undefined;
    post_type: string | undefined;
    caption: string | undefined;
    content: string | undefined;
    views: number | undefined;
    createdDate: string | undefined;
    account: Account | undefined;

    setPostType(post_type: any) {
        this.post_type = post_type
    }

    setPostCaption(caption : string) {
        this.caption = caption;
    }

    setHyperlink(hyperlink: string) {
        this.content = hyperlink
    }

}
