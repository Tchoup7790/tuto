# frozen_string_literal:true

module Madmin
  # Application Controller Madmin
  class ApplicationController < Madmin::BaseController
    http_basic_authenticate_with name: 'John', password: 'Doe'

    # Authenticate with Clearance
    # include Clearance::Controller
    # before_action :require_login

    # Authenticate with Devise
    # before_action :authenticate_user!

    # Authenticate with Basic Auth
    # http_basic_authenticate_with(name: Rails.application.credentials.admin_username, password: Rails.application.credentials.admin_password)
  end
end
