class Api::CommentsController < ApplicationController
    def index
        @comments = Comment.all
        render :index
    end

    def show
        @comment = Comment.find_by(id: params[:id])
        render :show
    end

    def create
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id
        if @comment.save!
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])
        @comment.destroy
    end

    private
    def comment_params
        params.require(:comment).permit(:photo_id, :body)
    end
    
end
