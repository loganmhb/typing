(ns typing.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(enable-console-print!)

(def app-state (atom {:messages []}))

(defui Message
  Object
  (render [this]
    (let [{:keys [text author]} (om/props this)]
      (dom/p nil (str author ": " text)))))

(def message (om/factory Message))

(defui MessageList
  Object
  (render [this]
    (let [{:keys [messages]} (om/props this)]
      (dom/div nil (map message messages)))))

(def message-list (om/factory MessageList))

(defui Chat
  Object
  (render [this]
    (let [{:keys [messages]} (om/props this)]
      (dom/div nil
               (message-list {:messages messages})
               (dom/input nil)))))

(def chat (om/factory Chat))

(js/ReactDOM.render (chat {:messages [{:author "Logan" :text "Hi there!"}]})
                    (gdom/getElement "app"))
