export class UpdateCommentRequest{
    commentId: number=0;
    postId: number = 0;
    userId: number = 0;
    comment: string = "";
    isConfirmed: boolean = true;
}