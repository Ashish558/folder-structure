import React from 'react'
import { useSelector } from 'react-redux'
import Slider from '../../../../../../components/Slider'
import MegaSlider from './megaSlider'

//will fetch render all the trending themes slider and subtypes sliders using the shared component Slider.js in component folder
//will render trending themes and subtypes slider OR one megaslider.
//mega slider will be rendered if the user clicks 'see more' which is at the end of trending themes slider and subtypes slider
//subtype sliders will only render themes if its activity type is selected

export default function Sliders() {
    const { sliders, isMegaSliderActive } = useSelector(state => state.sidebarSliders)
    const { trendingThemes, subtypes, themes } = sliders

    const { activityTypes } = useSelector(state => state.activityTypes)

    return (
        <div>

            <h2>slider</h2>
            {
                !isMegaSliderActive ?
                    <div>
                        <div>
                            {trendingThemes.map(theme => {
                                return <Slider key={theme.id} {...theme} activityType={theme.activityType} activitySubtype={theme.activitySubtype} />
                            })}
                        </div>

                        <div>
                            {subtypes.map(subtype => {
                                // get the activity type of the current activity subtype
                                const currentActivityType = activityTypes.find(type => subtype.activityTypeId === type.id)

                                return themes.map(theme => theme.subtypeId === subtype.id && currentActivityType.isSelected === true ?
                                    <Slider key={theme.id} {...theme } subtype={subtype} activityType={currentActivityType} /> : null
                            )
                            })}
                        </div>
                    </div>
                    :
                    <MegaSlider />
            }

        </div>
    )
}
