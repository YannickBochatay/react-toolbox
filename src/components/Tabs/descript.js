import React from "react"
import Tabs, { TabPane } from "./"
import { addNotification } from "components/NotifSystem/ducks"
import { store } from "store"

module.exports = {

  categ : "Presentation",

  construct : Tabs,

  link : "http://react-component.github.io/tabs/",

  states : {

    default : () => (
      <Tabs defaultActiveKey="1">
        <TabPane tab="Lorem" key="1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae erat in eros gravida consectetur.
          In non egestas arcu. Duis congue a odio nec commodo.
          Morbi ac mi mollis, elementum metus vehicula, volutpat turpis.
          Aenean leo ex, varius non lacinia at, faucibus vel nisi.
          Cras neque odio, tempus id efficitur imperdiet, aliquet id ante.
          Donec nec magna dui. Proin pulvinar fringilla enim sit amet facilisis.
          Praesent id justo sed turpis convallis euismod sollicitudin ut erat.
        </TabPane>
        <TabPane tab="Integer" key="2">
          Integer laoreet diam ut lorem cursus, sed aliquet leo blandit.
          Proin sit amet velit justo. Morbi non porta nunc.
          In hac habitasse platea dictumst. Mauris eu auctor tortor, eget cursus sem.
          Curabitur egestas consequat nisi a molestie.
          Curabitur nunc dui, maximus nec augue non, tristique lobortis nulla.
          Pellentesque tincidunt nisl mauris, ac hendrerit diam condimentum a.
        </TabPane>
        <TabPane tab="Pellentesque" key="3">
          Pellentesque tempor libero sit amet lorem elementum, ac fermentum arcu tempus.
          Nulla efficitur, leo ac pellentesque vehicula, velit mauris lobortis ex, sit amet dictum eros libero et felis.
          Curabitur dapibus neque sed tellus eleifend sodales. Cras eu turpis elit.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          Donec vehicula nibh eu viverra sodales. Donec suscipit urna vitae tortor venenatis, nec sagittis sem tempus.
          Phasellus augue orci, tincidunt vel condimentum ac, sagittis tempus augue.
          Curabitur fringilla vulputate orci eu sagittis. Nam volutpat in justo non convallis.
          Mauris ac lectus mauris. Curabitur sem justo, facilisis sit amet turpis vitae, dignissim venenatis dolor.
        </TabPane>
      </Tabs>
    ),

    eventOnChange : () => (
      <Tabs defaultActiveKey="1" onChange={ function handleChange() {

        store.dispatch(addNotification({
          message : "Tab changed",
          level : "success"
        }))

      } }>
        <TabPane tab="Lorem" key="1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae erat in eros gravida consectetur.
          In non egestas arcu. Duis congue a odio nec commodo.
          Morbi ac mi mollis, elementum metus vehicula, volutpat turpis.
          Aenean leo ex, varius non lacinia at, faucibus vel nisi.
          Cras neque odio, tempus id efficitur imperdiet, aliquet id ante.
          Donec nec magna dui. Proin pulvinar fringilla enim sit amet facilisis.
          Praesent id justo sed turpis convallis euismod sollicitudin ut erat.
        </TabPane>
        <TabPane tab="Integer" key="2">
          Integer laoreet diam ut lorem cursus, sed aliquet leo blandit.
          Proin sit amet velit justo. Morbi non porta nunc.
          In hac habitasse platea dictumst. Mauris eu auctor tortor, eget cursus sem.
          Curabitur egestas consequat nisi a molestie.
          Curabitur nunc dui, maximus nec augue non, tristique lobortis nulla.
          Pellentesque tincidunt nisl mauris, ac hendrerit diam condimentum a.
        </TabPane>
        <TabPane tab="Pellentesque" key="3">
          Pellentesque tempor libero sit amet lorem elementum, ac fermentum arcu tempus.
          Nulla efficitur, leo ac pellentesque vehicula, velit mauris lobortis ex, sit amet dictum eros libero et felis.
          Curabitur dapibus neque sed tellus eleifend sodales. Cras eu turpis elit.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          Donec vehicula nibh eu viverra sodales. Donec suscipit urna vitae tortor venenatis, nec sagittis sem tempus.
          Phasellus augue orci, tincidunt vel condimentum ac, sagittis tempus augue.
          Curabitur fringilla vulputate orci eu sagittis. Nam volutpat in justo non convallis.
          Mauris ac lectus mauris. Curabitur sem justo, facilisis sit amet turpis vitae, dignissim venenatis dolor.
        </TabPane>
      </Tabs>
    )
  }
}
