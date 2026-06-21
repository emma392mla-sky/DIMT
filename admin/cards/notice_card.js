const notification = `
<div class="bg-white rounded-xl border border-gray-200 shadow-sm p-6 h-full">
    <h2 class="text-lg font-semibold text-gray-900 border-b border-gray-100 pb-4 mb-6">Notifications</h2>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div>
            <h3 class="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-4">Send New Notification</h3>

            <div class="space-y-4">
                <div>
                    <label class="block text-xs font-medium text-gray-500 mb-1.5">Target Audience</label>
                    <select id="NOTIF_TARGET" class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all">
                        <option value="all">All Students</option>
                        <option value="P001">Public Health</option>
                        <option value="P002">Business Studies</option>
                        <option value="P003">Tailoring</option>
                        <option value="P004">Agro Business</option>
                        <option value="P005">Hotel Management</option>
                        <option value="P006">Computer Engineering</option>
                        <option value="P007">Community Development</option>
                        <option value="P008">HIV & AIDS Management</option>
                        <option value="P009">Nutrition & Food Security</option>
                        <option value="P010">Human Resource Management</option>
                        <option value="P011">Comp Science & Cyber Security</option>
                    </select>
                </div>

                <div>
                    <label class="block text-xs font-medium text-gray-500 mb-1.5">Priority</label>
                    <select id="NOTIF_PRIORITY" class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all">
                        <option value="low">Low</option>
                        <option value="high">High</option>
                        <option value="urgent">Urgent</option>
                    </select>
                </div>

                <input type="text" id="NOTIF_TITLE" placeholder="Notification Title" maxlength="100" class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all">

                <textarea id="NOTIF_MESSAGE" rows="5" placeholder="Type your message here..." class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"></textarea>

                <button id='send_notice' class="w-full mt-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/30" onclick="sendNotification()">
                    Send Notification
                </button>
            </div>
        </div>

        <div>
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-sm font-semibold text-gray-700 uppercase tracking-wide">Notification History</h3>
                <button onclick="clearNotifications()" class="text-xs font-medium text-red-500 hover:text-red-700 transition-colors">Clear All</button>
            </div>

            <div id="NOTIF_LIST" class="space-y-2 max-h-[28rem] overflow-y-auto pr-1">
                <div class="flex flex-col items-center justify-center text-center py-10 text-gray-400">
                    <i class="bi bi-bell-slash text-3xl mb-3 text-gray-300"></i>
                    <p class="text-sm">No notifications sent</p>
                </div>
            </div>
        </div>

    </div>
</div>
`;