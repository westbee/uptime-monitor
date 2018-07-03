import Route from '@ember/routing/route';

export default Route.extend({

	model() {
		return Ember.RSVP.resolve($.ajax({
		    type: "GET",
		    url: "https://updown.io/api/checks?api-key=ro-pz3x1zy4ae63yhygraqe",
		    dataType: "json",
		}));
	}
});
