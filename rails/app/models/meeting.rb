class Meeting < ActiveRecord::Base

  def retrieve_new_meeting(params)
    http = Curl.post("https://api.join.me/v1/meetings/start", { "startWithPersonalUrl": true }) do |curl|
      curl.headers["Authorization"] = "Bearer" + params.access_token
      curl.headers["Content-Type"] = "application/json"
    end

    return http
  end
end
