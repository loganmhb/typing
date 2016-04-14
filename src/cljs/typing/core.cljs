(ns typing.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(enable-console-print!)

(def app-state
  (atom {:messages [{:author "Logan"
                     :text "hi there"}]}))

(defn read [{:keys [state] :as env} key params]
  {:value (get @state key :not-found)})

(def reconciler
  (om/reconciler
   {:state app-state
    :parser (om/parser {:read read})}))

(defui Message
  Object
  (render [this]
    (let [{:keys [text author]} (om/props this)]
      (dom/p nil (str author ": " text)))))

(def message (om/factory Message))

(defui MessageList
  static om/IQuery
  (query [this]
    [:messages])
  Object
  (render [this]
    (let [{:keys [messages]} (om/props this)]
      (dom/div nil (map message messages)))))

(def message-list (om/factory MessageList))

(defui Chat
  static om/IQuery
  (query [this]
    `[{:messages ~(om/get-query MessageList)}])
  Object
  (render [this]
    (let [{:keys [messages]} (om/props this)]
      (dom/div nil
               (message-list {:messages messages})
               (dom/input nil)))))

(def chat (om/factory Chat))

(om/add-root! reconciler Chat (gdom/getElement "app"))

