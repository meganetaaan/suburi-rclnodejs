import * as rclnodejs from 'rclnodejs';
import * as cv from 'opencv4nodejs';

(async () => {
  await rclnodejs.init()
  const node = new rclnodejs.Node('image_subscriber')
  node.createSubscription('sensor_msgs/msg/Image', '/camera/color/image_raw', { qos: "qos_profile_default" }, (image) => {
    if ('data' in image) {
      /* sensor_msgs.msg.Image */
      const mat = new cv.Mat(Buffer.from(image.data), image.height, image.width, cv.CV_8UC3).cvtColor(cv.COLOR_BGR2RGB)
      cv.imshow('camera', mat)
      cv.waitKey(15)
    } else {
      /* Buffer */
      console.log('Buffer')
    }
  })
  node.spin()
})()