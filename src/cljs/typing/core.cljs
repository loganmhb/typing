(ns typing.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(enable-console-print!)

(def app-state
  (atom {:messages [{:author "Logan"
                     :text "hi there"}]
         :draft ""
         :current-author "Logan"}))

(defn read [{:keys [state] :as env} key params]
  {:value (get @state key :not-found)})

(defn mutate [{:keys [state] :as env} key params]
  (condp = key
    'message/send {:action #(do (swap! state update :messages conj params)
                                (swap! state assoc :draft ""))}
    'message/draft {:action #(swap! state merge params)}
    :default {:value :not-found}))

(def reconciler
  (om/reconciler
   {:state app-state
    :parser (om/parser {:read read :mutate mutate})}))

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

(defn handle-keypress [c props event]
  (if (= (.-keyCode event) 13) ;; enter
    (om/transact! c `[(message/send {:text ~(:draft props)
                                     :author ~(:current-author props)})
                      :draft])))

(defn update-draft [c props event]
  (om/transact! c `[(message/draft {:draft ~(.-value (dom/node c "input"))})]))

(defui ChatInput
  static om/IQuery
  (query [this]
    [:draft :current-author])
  Object
  (render [this]
    (let [{:keys [draft] :as props} (om/props this)]
      (dom/input #js {:onKeyDown #(handle-keypress this props %)
                      :onInput #(update-draft this props %)
                      :ref "input"
                      :value draft}))))

(def chat-input (om/factory ChatInput))

(defui Chat
  static om/IQuery
  (query [this]
        [:messages :current-author :draft])
  Object
  (render [this]
    (let [{:keys [messages current-author draft]} (om/props this)]
      (dom/div nil
               (message-list {:messages messages})
               (chat-input {:current-author current-author
                            :draft draft})))))

(def chat (om/factory Chat))

(om/add-root! reconciler Chat (gdom/getElement "app"))
