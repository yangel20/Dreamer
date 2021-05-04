class Api::PhotosController < ApplicationController
    def index
        @photos = Photo.all
        
        render :index
    end

    def show
        @photo = Photo.find(params[:id])

        render :show
    end

    def create
        @photo = Photo.new(photo_params)
        @photo.user_id = current_user.id
        if @photo.save!
            render :show
        else
            render json: @photo.errors.full_messages, status: 422
        end
    end
    
    def update
        @photo = Photo.find_by(id: params[:id])
        
        if @photo.update(photo_params)
            redirect_to photo_url(photo)
        else
            render json: @photo.errors.full_messages, status: unprocessable_entity
        end
    end
    
    def destroy
        @photo = Photo.find(params[:id])
        
        if @photo.destroy
            render :show
        else
            render json: ["photo not destroyed"], status: 401
        end
        
    end
    
    
    private
    def photo_params
        params.require(:photo).permit(:title, :description, :picture, :user_id)
    end

end
