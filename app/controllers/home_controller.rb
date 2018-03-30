class HomeController < ApplicationController

  def index
    @home_props = {
      home: {
        users: User.all.map{ |u| {name: u.full_name, id: u.id} },
        loadingConversations: true # Since we'll need to load as soon as the user "logs in"
      },
      activeConversation: {}
    }
  end
end