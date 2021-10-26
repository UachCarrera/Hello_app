require 'test_helper'

class SiguientesVistasControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get siguientes_vistas_index_url
    assert_response :success
  end

end
