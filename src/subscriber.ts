import * as rclnodejs from 'rclnodejs'

(async () => {
  await rclnodejs.init()
  console.log('initialized.')
  const node = new rclnodejs.Node('subscriber_example_node')
  node.createSubscription('std_msgs/msg/String', 'hello', {
    qos: ""
  }, (message) => {
    if ('data' in message) {
      console.log(`received message: ${message.data}`)
    }
  })
  node.spin()
})()