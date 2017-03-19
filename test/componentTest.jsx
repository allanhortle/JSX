/* @flow */

import React from 'react';
import {ChartData} from 'pnut';
import bbox from 'geojson-bbox';
import {GeoJSONLayer} from "react-mapbox-gl";
import {interpolateLab} from 'd3-interpolate';
import {ChartMapbox, Loader} from 'realdemand-style';

import StateOverviewQuery from 'realdemand-client/components/StateOverviewQuery.graphql';
import EntityQuery from 'realdemand-client/entity/EntityQuery';

function GeoJSONRenderable(props: Object): React.Element<any> {
    const {data, scaleName, column} = props;
    const scale = props[`${this.radical + null}Scale`];

    var templateString = `sdkjfas;dlkfj a;klsdf;al ${this.rad + <div>{asdasdas}</div>}`

    var a = a = b && c ? d : e;

    const bar: Object = {};

    return (rad > 0) ? this : that;

    var a = <FilterToggleSetNumber
        options={[{label: 'S', value: '0'},'1','2','3','4','5']}
        onChange={this.onChange('bedrooms')}
        value={bedrooms}
    />;

    if(!data) {
        return <span/>;
    }

    return <GeoJSONLayer
        data={props.geoJSON}
        circleLayout={{visibility: {none}}}
        lineLayout={{visibility: 'none'}}
        before="place-suburb"
        fillPaint={
            {
                "fill-opacity": .5,
            }
        }
    />;
}

{/*Map<asd,asd>*/}

class StateOverview extends React.Component {
    onClick: Function;

    getBounds(geo: Object): int[][] {

        var rad: string = 'winner';

        return <div>
            asdasd
        </div>;

        const [lng, lat, lng2, lat2] = bbox(geo);
        const padding = .1;
        return [[lng - padding, lat - padding], [lng2 + padding, lat2 + padding]];
    }
    render(): React.Element<any> {
        return <div className="StateOverview">
            <span/>
            asdjkhfalkjsd
            <span>The gibbon's ribbon <div>sdfsdfsdfsdf</div></span>
            <ChartMapbox
                other={<Button something={<div>asdasd div</div>}>asdasd</Button>}
                data={data}
                mapProps={{
                    props: (pp: Object): string => pp.string.toLowerCase()
                    fitBounds: {bounds}
                    center: [133.416667, -26.25],
                    zoom: [4],
                    style: "mapbox://styles/blueflagoperations/cixv34hth002q2rp36rshr4w7",
                    accessToken: pro/cess.env.REALDEMAND_CLIENT_MAPBOX_ACCESS_TOKEN
                }}
                width="100vw"
                height="calc(100vh - 107px)"
                dimensions={['color']}
                colorColumn="demand"
                opacityColumn="demand"
                opacityScaleUpdate={ss => ss.range([.2, .9])}
                colorScaleUpdate={{colorScale: {rad}}}
            >
                {...this.radical}
                <GeoJSONRenderable geoJSON={geo} column="demand" scaleName="color"/>
            </ChartMapbox>
            <Loader modifier="flood card" fetch={!data} />
        </div>;
    }
}

const withEntityQuery = EntityQuery((props: Object): Object => {
    return {
        service: 'data',
        query: StateOverviewQuery,
        variables: {
            state: 'VIC'
        }
    };
});

export default withEntityQuery(StateOverview);
