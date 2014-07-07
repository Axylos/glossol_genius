class Api::SearchController < ApplicationController
  
  def show
    @documents = PgSearch.multisearch(params[:query]).map { |res| res.searchable }
    render "api/documents/index"
  end
  
  
end