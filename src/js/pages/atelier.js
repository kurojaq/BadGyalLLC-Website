/**
 * Digital Atelier / 3D Studio Page
 */

export function loadAtelierPage(outlet) {
  outlet.innerHTML = `
    <section class="section">
      <div class="container">
        <div style="margin-bottom: var(--spacing-4);">
          <h1 class="section-title">Digital Atelier</h1>
          <p class="section-subtitle">Design your perfect nail service in 3D</p>
        </div>

        <div class="atelier-container">
          <div class="atelier-viewport">
            <div style="text-align: center;">
              <p style="margin-bottom: var(--spacing-4);">🎨</p>
              <p>3D Nail Preview</p>
              <p style="font-size: var(--font-size-sm); color: var(--color-text-light); margin-top: var(--spacing-2);">Coming Soon</p>
            </div>
          </div>

          <div class="atelier-controls">
            <h3 style="margin-bottom: var(--spacing-4);">Customization</h3>

            <div class="control-group">
              <label class="control-label">Service Type</label>
              <select class="form-control">
                <option>Manicure</option>
                <option>Pedicure</option>
                <option>Extensions</option>
                <option>Nail Art</option>
              </select>
            </div>

            <div class="control-group">
              <label class="control-label">Nail Shape</label>
              <div style="display: flex; gap: var(--spacing-2); flex-wrap: wrap;">
                <button class="btn btn-secondary" style="flex: 1; min-width: 80px;">Almond</button>
                <button class="btn btn-secondary" style="flex: 1; min-width: 80px;">Coffin</button>
                <button class="btn btn-secondary" style="flex: 1; min-width: 80px;">Square</button>
              </div>
            </div>

            <div class="control-group">
              <label class="control-label">Length</label>
              <input type="range" class="form-control" min="0" max="100" value="50">
            </div>

            <div class="control-group">
              <label class="control-label">Base Color</label>
              <input type="color" class="form-control" value="#c9a961">
            </div>

            <div class="control-group">
              <label class="control-label">Finish</label>
              <select class="form-control">
                <option>Gloss</option>
                <option>Matte</option>
                <option>Chrome</option>
                <option>Metallic</option>
                <option>Holographic</option>
              </select>
            </div>

            <div class="control-group">
              <label class="control-label">Embellishments</label>
              <div style="display: flex; gap: var(--spacing-2); flex-wrap: wrap;">
                <input type="checkbox" id="gems"> <label for="gems">Gems</label>
                <input type="checkbox" id="chains"> <label for="chains">Chains</label>
                <input type="checkbox" id="art"> <label for="art">Art</label>
              </div>
            </div>

            <button class="btn btn-accent btn-lg btn-block" style="margin-top: var(--spacing-4);">Book Design</button>
          </div>
        </div>
      </div>
    </section>
  `;
}
