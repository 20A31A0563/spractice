
var fromDate = gs.daysAgo(1); // Example: Logs from the last 24 hours
var severityLevel = 'error';   // Example: Only fetch logs with severity 'error'

// Query logs based on filtering criteria
var gr = new GlideRecord('syslog');
gr.addQuery('sys_created_on', '>=', fromDate);
gr.addQuery('severity', severityLevel);
gr.orderByDesc('sys_created_on');
gr.query();

// Print out filtered logs
while (gr.next()) {
    var logMessage = gr.getValue('message');
    var logSeverity = gr.getValue('severity');
    var logTimestamp = gr.getValue('sys_created_on');
    
    
    var formattedLog = logTimestamp + ' [' + logSeverity + '] ' + logMessage;
    
    
    gs.print(formattedLog);
}