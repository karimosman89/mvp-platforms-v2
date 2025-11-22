import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import HomePage from './pages/HomePage'
import PredictiveOilPro from './platforms/oil-gas/PredictiveOilProEnhanced'
import GridSmartPro from './platforms/electricity/GridSmartProEnhanced'
import AutoVisionAI from './platforms/automotive/AutoVisionAI'
import RiskGuardPro from './platforms/finance/RiskGuardProEnhanced'
import LogiSmart from './platforms/logistics/LogiSmart'
import TradeFlowPro from './platforms/import-export/TradeFlowPro'
import RoboVision from './platforms/robotics/RoboVision'
import MedScanAI from './platforms/healthcare/MedScanAI'
import AgenticFlowPro from './platforms/agentic/AgenticFlowPro'
import MultiModalNexus from './platforms/multimodal/MultiModalNexus'
import EdgeIntelPro from './platforms/edge/EdgeIntelPro'
import QuantumMindAI from './platforms/quantum/QuantumMindAI'
import SovereignShieldAI from './platforms/sovereign/SovereignShieldAI'
import AIModelHub from './platforms/ai-models/AIModelHub'

const App: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ minHeight: '100vh' }}
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/predictive-oil-pro" element={<PredictiveOilPro />} />
        <Route path="/grid-smart-pro" element={<GridSmartPro />} />
        <Route path="/auto-vision-ai" element={<AutoVisionAI />} />
        <Route path="/risk-guard-pro" element={<RiskGuardPro />} />
        <Route path="/logi-smart" element={<LogiSmart />} />
        <Route path="/trade-flow-pro" element={<TradeFlowPro />} />
        <Route path="/robo-vision" element={<RoboVision />} />
        <Route path="/med-scan-ai" element={<MedScanAI />} />
        <Route path="/agentic-flow-pro" element={<AgenticFlowPro />} />
        <Route path="/multimodal-nexus" element={<MultiModalNexus />} />
        <Route path="/edge-intel-pro" element={<EdgeIntelPro />} />
        <Route path="/quantum-mind-ai" element={<QuantumMindAI />} />
        <Route path="/sovereign-shield-ai" element={<SovereignShieldAI />} />\n        <Route path="/ai-model-hub" element={<AIModelHub />} />
      </Routes>
    </motion.div>
  )
}

export default App