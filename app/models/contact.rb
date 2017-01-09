class Contact < MailForm::Base
  attribute :email,     :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :nickname,  :captcha  => true
  attribute :first_name, :validate => true
  attribute :last_name
  attribute :company
  attribute :title

  # Declare the e-mail headers. It accepts anything the mail method
  # in ActionMailer accepts.
  def headers
    {
      :subject => "Crawling Ninja New Client Inquiry",
      :to => "songthamtung@gmail.com",
      :from => %("#{first_name}" <#{email}>)
    }
  end
end