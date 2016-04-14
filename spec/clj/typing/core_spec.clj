(ns typing.core-spec
  (:require [speclj.core :refer :all]
            [ring.mock.request :as mock]
            [typing.core :refer :all]))

(describe "Typing API"
          (context "GET /"
                   (it "starts with an empty message"
                       (should= (app (mock/request :get "/"))
                                  {:status 200
                                   :headers {"Content-Type" "application/json"}
                                   :body {}}))))

(run-specs)
