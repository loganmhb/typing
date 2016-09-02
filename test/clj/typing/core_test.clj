(ns typing.core-test
  (:require [typing.core :as sut]
            [clojure.test :as t]
            [ring.mock.request :as mock]))


(t/deftest api-test
  (t/testing "GET / returns a 200"
    (let [resp (sut/app (mock/request :get "/"))]
      (t/is (= 200 (:status resp))))))
