class HomeController < ApplicationController
  def index
  end

  def samples
  end

  def new
    @contact = Contact.new
  end
end
