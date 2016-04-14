(ns typing.core
  (:require [compojure.core :refer [defroutes GET POST]]
            [org.httpkit.server :refer [run-server]]
            [cheshire.core]))


(def messages (atom {}))

(defroutes app
  (GET "/" []
       {:status 200
        :headers {"Content-Type" "application/json"}
        :body @messages})
  (POST "/messages/" req
    (let [body (-> req
                   :body
                   slurp
                   cheshire.core/parse-string)]
      (swap! messages assoc (:remote-addr req) (get body
                                                    "messages")))
    {:status 200}))


(defn -main []
  (run-server app {:port 8010}))
