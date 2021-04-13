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
        photo = Photo.new(photo_params)

        if photo.save!
            render json: photo
        else
            render json: photo.errors.full_messages, status: 422
        end
    end

    def update
        photo = Photo.find_by(id: params[:id])

        if photo.update(photo_params)
            redirect_to photo_url(photo)
        else
            render json: photo.errors.full_messages, status: unprocessable_entity
        end
    end

    def destroy
        photo = Photo.find(params[:id])
        photo.destroy
        render :show      

    end

    private
    def photo_params
        params.require(:photo).permit(:title, :description, :user_id, :photo)
    end

end
