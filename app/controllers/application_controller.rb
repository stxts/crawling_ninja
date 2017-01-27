class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  def redirect_https        
        redirect_to :protocol => "https://" unless request.ssl?
        return true
    end
    before_filter :redirect_https
  protect_from_forgery with: :exception
end
