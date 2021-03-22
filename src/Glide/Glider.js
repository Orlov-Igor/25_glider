import React, { Component } from 'react';
import Glide from '@glidejs/glide'


class Glider extends Component {
	constructor(props) {
		super(props);
        this.slider = React.createRef();
        this.glider = null;
	}

	componentDidMount = () => {
	  	this.initGlider();
	}
  
	initGlider = () => {
		this.slider = new Glide(this.slider.current, this.props.options)
		this.slider.mount()
	}
  
	componentWillReceiveProps = newProps => {
		if (this.props.options.startAt !== newProps.options.startAt) {
			this.slider.go(`=${newProps.options.startAt}`)
		}
	}
  
	componentDidUpdate = newProps => {
		if (this.props.options !== newProps.options) {
		  	this.slider.update(newProps.options)
		}
	}
	
	componentWillUnmount = () => {
		this.slider.destroy()
	}

	render = () => (
	  <div ref={this.slider} style={{ overflowX: 'hidden', userSelect: 'none', maxWidth: '100vw' }}>
		<div className="glide_track" data-glide-el="track">
			<div className="glide_slides" style={{ display: 'flex' }}>
				{this.props.children.map((slide, index) => {
					return React.cloneElement(slide, {
						key: index,
						className: `${slide.props.className} glide_slide`,
				})
				})}
			</div>
		</div>
		<div className="glide_arrows" data-glide-el="controls">
			<button className="glide_arrow glide_arrow-left" data-glide-dir="<">prev</button>
			<button className="glide_arrow glide_arrow-right" data-glide-dir=">">next</button>
		</div>
		<div class="glide_bullets" data-glide-el="controls[nav]">

			{this.props.children.map((slide, index) => {
				    let currIndex = "="+index;
					return (
					<button className="glide_bullet" data-glide-dir={currIndex}>
					</button>
					) 
			})}
			
		</div>
	</div>
	)
  }
  
Glider.defaultProps = {
	images:[],
	options: {},
}

export default Glider;