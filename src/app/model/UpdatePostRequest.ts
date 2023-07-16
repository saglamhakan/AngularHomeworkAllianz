export class UpdatePostRequest{
    postId: number=0;
    userId: number =0;
    categoryId: number =0;
    title: string ="";
    content: string = "";
    viewCount: number =0;
    isPublished: boolean = true;
}