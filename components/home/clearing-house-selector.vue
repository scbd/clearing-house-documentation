<template>
  <div class="net-grid">
    <a
      v-for="ch in clearingHouses"
      :key="ch.code"
      :href="withBase(ch.path)"
      class="net"
    >
      <span class="ab">{{ ch.code }}</span>
      <span class="nname">{{ ch.name }}</span>
      <span class="ndesc">{{ ch.desc }}</span>
      <span class="ngo">
        View reference
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4">
          <path d="M5 12h14m-6-6 6 6-6 6" />
        </svg>
      </span>
    </a>
  </div>
</template>

<script setup>
import { withBase } from 'vitepress'

const clearingHouses = [
  {
    code: 'CHM',
    path: '/chm/',
    name: 'Clearing-House Mechanism',
    desc: "Information-sharing records under the Convention — national targets, NBSAPs, contacts and resources.",
  },
  {
    code: 'ABSCH',
    path: '/abs/',
    name: 'Access & Benefit-Sharing Clearing-House',
    desc: 'Permits, checkpoints and national records under the Nagoya Protocol.',
  },
  {
    code: 'BCH',
    path: '/bch/',
    name: 'Biosafety Clearing-House',
    desc: 'Decisions, risk assessments and LMO registries under the Cartagena Protocol.',
  },
  {
    code: 'ORT',
    path: '/ort/',
    name: 'Online Reporting Tool',
    desc: 'Structured national report data submitted by Parties through the reporting tool.',
  },
]
</script>

<style scoped>
.net-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin: 2.5rem 0;
}
.net {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border-radius: 11px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-border);
  text-decoration: none;
  transition: border-color 0.15s, box-shadow 0.15s;
}
.net:hover {
  border-color: var(--cbd-green-300);
  box-shadow: 0 10px 24px -16px rgba(8, 54, 31, 0.4);
}
.net .ab {
  align-self: flex-start;
  font-family: var(--vp-font-family-mono);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--cbd-green-800);
  background: var(--cbd-green-50);
  border: 1px solid var(--cbd-green-100);
  padding: 4px 9px;
  border-radius: 6px;
}
.net .nname {
  font-size: 15.5px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  line-height: 1.3;
}
.net .ndesc {
  flex: 1;
  font-size: 13px;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}
.net .ngo {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 700;
  color: var(--vp-c-brand-1);
}
.net .ngo svg {
  width: 13px;
  height: 13px;
}
.dark .net .ab {
  color: var(--cbd-green-300);
  background: rgba(124, 194, 148, 0.1);
  border-color: #1d3326;
}
@media (max-width: 640px) {
  .net-grid {
    grid-template-columns: 1fr;
  }
}
</style>
