import {Logger} from "./Logger"; //at fist i thought this was the actuall logger from node js :D


import {CreativeAnalyzer} from "./CreativeAnalyzer";
import {PlacementStorage} from "./PlacementStorage";


export class CreativeManager {

	private publisher:any;
	private creatives:any;

	private creativeAnalyzer: CreativeAnalyzer;
	private placementStorage: PlacementStorage;


	constructor(initialData : any) {
		this.fetch(initialData.publisherId);
		this.creativeAnalyzer = new CreativeAnalyzer();
		this.placementStorage = new PlacementStorage();

	}


	async fetchPublisher(publisherId : string) {
		const response = await fetch("/api/publishers/" + publisherId, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
		});
		const data = await response.json();
		this.publisher = data.publisher;
	}


	async fetchCreatives(result : any) {
		const response = await fetch("/api/publishers/" + this.publisher.id + "/creatives/", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
		});
		const data = await response.json();
		this.creatives = data.creatives;
	}


	async fetch(publisherId:string) {
		const result = await this.fetchPublisher(publisherId);
		return this.fetchCreatives(result);
	}


	run() {
		for (const creative of this.creatives) {
			switch (creative.adType) {
				case 'simple': {
					const logger = new Logger();
					logger.send("Creative rendered", {
						creative_id: creative.id,
						creative_name: creative.name,
						creative_type: creative.adType,
						creative_size: creative.size,
						creative_price: creative.price,
						creative_placement: creative.plcementId,
					});
					this.creativeAnalyzer.run({
						id: creative.id,
						name: creative.name,
						type: creative.adType,
						price: creative.price,
					});


					this.render(this.placementStorage.find(creative.placementId, creative.html));


					break;
				}
				case 'takeover': {
					const notAllowedTakeovers = [2233, 45435, 2352, 6683];


					if (notAllowedTakeovers.indexOf(creative.takeoverId) === -1) {
						const logger = new Logger();
						logger.send("Creative rendered", {
							creative_id: creative.id,
							creative_name: creative.name,
							creative_type: creative.adType,
							creative_size: creative.size,
							creative_price: creative.price,
						});
						this.creativeAnalyzer.run({
							id: creative.id,
							name: creative.name,
							type: creative.adType,
							price: creative.price,
						});
						this.renderTakeover(this.placementStorage.find(creative.placementId, creative.takeoverParams));
					}


					break;
				}
				case 'hybrid': {
					const logger = new Logger();
					logger.send("Creative rendered", {
						creative_id: creative.id,
						creative_name: creative.name,
						creative_type: creative.adType,
						creative_size: creative.size,
						creative_price: creative.price,
					});
					this.creativeAnalyzer.run({
						id: creative.id,
						name: creative.name,
						type: creative.adType,
						price: creative.price,
					});


					if (creative.hybrid.vertical) {
						this.render(this.placementStorage.find(creative.placementId), creative.hybrid.verticalHtml);
					} else if (creative.hybrid.horizontal) {
						this.render(this.placementStorage.find(creative.placementId), creative.hybrid.horizontalHtml);
					} else if (creative.hybrid.takeover) {
						const notAllowedTakeovers = [2233, 45435, 2352, 6683];


						if (notAllowedTakeovers.indexOf(creative.hybrid.takeoverId) === -1) {
							this.renderTakeover(this.placementStorage.find(creative.placementId), creative.hybrid.takeoverParams);
						}
					} else {
						this.render(this.placementStorage.find(creative.placementId), creative.hybrid.html);
					}


					break;
				}
				default: break;
			}
		}
	}


	render(placementId:string, htmlStr?:string) {
		const placement:HTMLElement = document.getElementById(placementId.toString()) as HTMLInputElement;
		if(htmlStr) placement.innerHTML = htmlStr;
	}


	renderTakeover(placementId:string, params?:any) {
		// renders creative in a specific way
	}
}


