(ns typing.core-spec
  (:require [speclj.core :refer :all]
            [ring.mock.request :as mock]
            [typing.core :refer :all]))

(describe "Typing API"
  (context "GET /"
    (it "starts with an empty message"
      (should= {:status 200
                :headers {"Content-Type" "application/json"}
                :body {}}
               (app (mock/request :get "/"))))))

(run-specs)
