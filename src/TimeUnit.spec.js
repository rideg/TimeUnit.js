describe('Conversions', function() {
    it("Millis", function() {
        expect(TimeUnit.MILLIS.toMillis(5)).toBe(5);
        expect(TimeUnit.MILLIS.toSeconds(5100)).toBe(5);
        expect(TimeUnit.MILLIS.toMinutes(5 * 1000 * 60 + 1000)).toBe(5);
        expect(TimeUnit.MILLIS.toHours(5 * 1000 * 60 * 60 + 300)).toBe(5);
        expect(TimeUnit.MILLIS.toDays(5 * 1000 * 60 * 60 * 24 + 4000)).toBe(5);
    });

    it("Seconds", function() {
        expect(TimeUnit.SECONDS.toMillis(5)).toBe(5000);
        expect(TimeUnit.SECONDS.toSeconds(5)).toBe(5);
        expect(TimeUnit.SECONDS.toMinutes(5 * 60 + 10)).toBe(5);
        expect(TimeUnit.SECONDS.toHours(5 * 60 * 60 + 10)).toBe(5);
        expect(TimeUnit.SECONDS.toDays(5 * 60 * 60 * 24 + 30)).toBe(5);
    });

    it("Minutes", function() {
        expect(TimeUnit.MINUTES.toMillis(5)).toBe(5 * 1000 * 60);
        expect(TimeUnit.MINUTES.toSeconds(5)).toBe(5 * 60);
        expect(TimeUnit.MINUTES.toMinutes(5)).toBe(5);
        expect(TimeUnit.MINUTES.toHours(5 * 60 + 31)).toBe(5);
        expect(TimeUnit.MINUTES.toDays(5 * 60 * 24 + 40)).toBe(5);
    });

    it("Hours", function() {
        expect(TimeUnit.HOURS.toMillis(5)).toBe(5 * 1000 * 60 * 60);
        expect(TimeUnit.HOURS.toSeconds(5)).toBe(5 * 60 * 60);
        expect(TimeUnit.HOURS.toMinutes(5)).toBe(5 * 60);
        expect(TimeUnit.HOURS.toHours(5)).toBe(5);
        expect(TimeUnit.HOURS.toDays(5 * 24 + 10)).toBe(5);
    });

    it("Days", function() {
        expect(TimeUnit.DAYS.toMillis(1)).toBe(1000 * 60 * 60 * 24);
        expect(TimeUnit.DAYS.toSeconds(1)).toBe(60 * 60 * 24);
        expect(TimeUnit.DAYS.toMinutes(1)).toBe(60 * 24);
        expect(TimeUnit.DAYS.toHours(1)).toBe(24);
        expect(TimeUnit.DAYS.toDays(1)).toBe(1);
    });
});
