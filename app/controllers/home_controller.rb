class HomeController < ApplicationController
  redirect_to "https://www.crawling.ninja"
  def index
  end

  def samples
  end

  def new
    @contact = Contact.new
  end
end
