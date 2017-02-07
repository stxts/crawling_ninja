class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.deliver
      flash.now[:success] = 'Thank you for your message. Our Ninjas will contact you soon!'
      render :contact => true
    else
      flash.now[:error] = 'Cannot send message.'
      render :new
    end
  end

  force_ssl if: :ssl_configured?

end