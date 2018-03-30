class HomeController < ApplicationController

  def index
    @home_props = { messages: [] }
  end
end