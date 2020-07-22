import React from "react"

const ConversationHeader = ({conversation, users, currentUserId, toggleSidebar}) => (
  <div className="message-header">
    <div>
        <h3>
          {
          conversation.convoType === "channel" 
          ?
          conversation.name
          :
          conversation.memberIds
            .map((id) => {
              if (id !== currentUserId) {
                return users[id].displayName || users[id].fullName
              }
              return " "
            })
            .join(", ")
            .replace(/\s,\s/ig, "")
            .trim()
          }
        </h3>
    </div>
    <div>
      <button className="toggle-sidebar-button" onClick={() => toggleSidebar()}>
        <svg id="Layer_1" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m256 512c-68.38 0-132.667-26.628-181.02-74.98s-74.98-112.64-74.98-181.02 26.628-132.667 74.98-181.02 112.64-74.98 181.02-74.98 132.667 26.628 181.02 74.98 74.98 112.64 74.98 181.02-26.628 132.667-74.98 181.02-112.64 74.98-181.02 74.98zm0-480c-123.514 0-224 100.486-224 224s100.486 224 224 224 224-100.486 224-224-100.486-224-224-224z"/><path d="m256 368c-8.836 0-16-7.164-16-16 0-40.386 15.727-78.354 44.285-106.912 17.872-17.873 27.715-41.635 27.715-66.911 0-27.668-22.509-50.177-50.177-50.177h-3.646c-27.668 0-50.177 22.509-50.177 50.177v5.823c0 8.836-7.164 16-16 16s-16-7.164-16-16v-5.823c0-45.313 36.864-82.177 82.177-82.177h3.646c45.313 0 82.177 36.864 82.177 82.177 0 33.823-13.171 65.622-37.088 89.539-22.514 22.513-34.912 52.446-34.912 84.284 0 8.836-7.164 16-16 16z"/><path d="m256.02 432c-8.836 0-16.005-7.164-16.005-16s7.158-16 15.995-16h.01c8.836 0 16 7.164 16 16s-7.164 16-16 16z"/></g></svg>
      </button>
    </div>
  </div>
)

export default ConversationHeader