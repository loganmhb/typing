(defproject typing "0.1.0-SNAPSHOT"
  :description "Typing"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [org.omcljs/om "1.0.0-alpha22"]
                 [figwheel-sidecar "0.5.0-SNAPSHOT" :scope "test"]
                 [http-kit "2.2.0-SNAPSHOT"]
                 [compojure "1.5.0"]
                 [ring "1.4.0"]
                 [cheshire "5.5.0"]]
  :profiles {:dev {:dependencies [[ring/ring-mock "0.3.0"]]}}
  :source-paths ["src/clj"]
  :test-paths ["test/clj"])
