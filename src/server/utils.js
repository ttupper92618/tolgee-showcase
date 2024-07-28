const logMessage = (message, data) => {
  console.log('');
  console.log(`******* ${message.replaceAll('\n', ' ')} *******`);
  if (data) {
    console.log(data);
  }
};

const sendEvent = (clients, event) => {
  var message = '';
  if (event.type) {
    message += 'event: ' + event.type + '\n';
  }

  if (event.data) {
    var lines = event.data?.split('\n');
    message += 'data: ' + lines.join('\ndata: ');
  }

  sendMessageRaw(clients, message + '\n\n');
};

const sendMessageRaw = (clients, message) => {
  logMessage('Publishing: ' + message);

  for (var sseObserver in clients) {
    clients[sseObserver].write(message);
  }
};

module.exports.logMessage = logMessage;
module.exports.sendEvent = sendEvent;
module.exports.sendMessageRaw = sendMessageRaw;
