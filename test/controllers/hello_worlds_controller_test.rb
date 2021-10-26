require 'test_helper'

class HelloWorldsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get hello_worlds_index_url
    assert_response :success
  end

end
