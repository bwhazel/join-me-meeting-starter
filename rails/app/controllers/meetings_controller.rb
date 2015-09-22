class MeetingsController < ActionController::Base
  def create
    meeting = retrieve_new_meeting

    binding.pry

    if meeting
      render json: meeting, status: 201
    end
  end



  def retrieve_new_meeting
    http = Curl::Easy.http_post("https://api.join.me/v1/meetings/start", Curl::PostField.content('startWithPersonalUrl', true)) do |curl|
      curl.headers["Authorization"] = "Bearer " + params[:access_token]
      curl.headers["Content-Type"] = "application/json"
    end

    binding.pry

    return http
  end
end
